class Todo{
    static id = 0;
    public id: number;
    public title: string;
    public done: boolean;
    constructor(title: string, done: boolean) {
        this.id = Todo.id++;
        this.title = title;
        this.done = done;
    }
}

export default Todo;