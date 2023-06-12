<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = auth()->user()->tasks;
        return response()->json(['tasks' => $tasks]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'nullable',
        ]);

        $task = new Task();
        $task->title = $validatedData['title'];
        $task->description = $validatedData['description'];
        $task->user_id = auth()->user()->id;
        $task->save();

        return response()->json(['task' => $task], 201);
    }

    public function show(Task $task)
    {
        return response()->json(['task' => $task]);
    }

    public function update(Request $request, Task $task)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'nullable',
        ]);

        $task->title = $validatedData['title'];
        $task->description = $validatedData['description'];
        $task->save();

        return response()->json(['task' => $task]);
    }

    public function destroy(Task $task)
    {
        $task->delete();

        return response()->json(['message' => 'Task deleted successfully']);
    }
}
