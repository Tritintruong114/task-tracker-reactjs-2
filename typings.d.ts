interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "inprogess" | "done";

interface Column {
  id: TypedColumn;
  todos: [];
}

interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  image?: Image;
}
interface Image {
  bucketId: string;
  filedId: string;
}

interface ImportMeta {
  env: {
    VITE_PROJECT_ID: string;
    VITE_PUBLIC_TODOS_COLLECTION_ID: string;
    VITE_PUBLIC_DATABASE_ID: string;
  };
}
