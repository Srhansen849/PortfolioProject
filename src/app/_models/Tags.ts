export class Tags{
    static readonly ANGULAR = new Tags('Angular', 'blue');
    static readonly JAVA = new Tags('Java', 'red');
    static readonly CSHARP = new Tags('C#', 'purple');
    static readonly TYPESCRIPT = new Tags('TypeScript', 'green');
    static readonly JAVASCRIPT = new Tags('JavaScript', 'teal');
    static readonly SQL = new Tags('SQL', 'skyblue');
    static readonly NET = new Tags('.Net', 'orange');
    static readonly NODEJS = new Tags('Node.js', 'darkgreen');
    static readonly SPRINGBOOT = new Tags('Springboot', 'lightgreen');


    private constructor(private readonly key: string, public readonly color: string){

    }

    toString() {
        return this.key;
    }
}