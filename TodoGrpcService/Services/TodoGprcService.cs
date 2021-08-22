using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApiContext;

namespace TodoGrpcService
{
    public class TodoGprcService : TodoService.TodoServiceBase
    {
        private readonly ILogger<TodoGprcService> _logger;
        private readonly TodoContext _context;

        public TodoGprcService(ILogger<TodoGprcService> logger, TodoContext context)
        {
            _logger = logger;
            _context = context;
        }

        public override async Task<TodoList> GetAll(Empty empty, ServerCallContext context)
        {
            var items = await _context.Todos
                .Select(x => ItemToDTO(x))
                .ToListAsync();
            TodoList pl = new();
            pl.Todos.AddRange(items);
            return pl;
        }

        public override async Task<Todo> Insert(Todo item, ServerCallContext context)
        {
            var todoItem = new TodoApiContext.Todo
            {
                IsComplete = item.IsComplete,
                Name = item.Name
            };

            _context.Todos.Add(todoItem);
            await _context.SaveChangesAsync();

            return ItemToDTO(await _context.Todos.FindAsync(todoItem.Id));
        }

        public override async Task<Todo> Update(Todo item, ServerCallContext context)
        {
            var todoItem = await _context.Todos.FindAsync(item.TodoId);
            if (todoItem != null)
            {
                todoItem.Name = item.Name;
                todoItem.IsComplete = item.IsComplete;
                return ItemToDTO(todoItem);
            }
            return await Task.FromException<Todo>(new EntryPointNotFoundException());
        }

        public override async Task<Empty> Delete(TodoId item, ServerCallContext context)
        {
            var todoItem = await _context.Todos.FindAsync(item.Id);
            if (todoItem == null)
            {
                return await Task.FromException<Empty>(new EntryPointNotFoundException());
            }
            _context.Todos.Remove(todoItem);
            await _context.SaveChangesAsync();
            return await Task.FromResult(new Empty());
        }

        private static Todo ItemToDTO(TodoApiContext.Todo todoItem) =>
            new Todo
            {
                TodoId = todoItem.Id,
                Name = todoItem.Name,
                IsComplete = todoItem.IsComplete ?? false
            };
    }
}
