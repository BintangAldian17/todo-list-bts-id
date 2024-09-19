export type LoginPayload = {
    password: string;
    username: string
} 

export type RegisterPayload = {
    email: string;
    password: string;
    username: string
}

export type ChecklistPayload = {
    name: string
}

export type Checklist =  {
    id: number;
    name: string;
    checklistCompletionStatus: boolean;
    items: any[] | null;
}