export enum SITE_HEALTH{
    OK = 'OK',
    NOT_STARTED = 'NOT STARTED',
    NEED_ATTENTION = 'NEED ATTENTION',
    FINISHED = 'FINISHED'
}

export enum STATE{
    NOT_STARTED = 'NOT STARTED',
    IN_PROGRESS = 'IN PROGRESS',
    FINISHED = 'FINISHED',
    STOPPED = 'STOPPED'
}

interface Attachment {
    type: string;
    src: string;
    _id: string;
}

interface Note {
    category: string;
    note: string;
    ATTACHMENTS: Attachment[];
    _id: string;
}

interface Logos {
    CLIENT_LOGO: string;
    CONTRACTING_LOGO: string;
}

export interface GenerateReport {
    LOGOS: Logos;
    _id: string;
    PROJECT_NAME: string;
    ADDRESS: string;
    createdAt: string;
    ATTENDANCE: {
        _id: string;
        NAME: string;
        POSITION: string;
        attendance: number; //CANTIDAD DE ASISTENCIAS EN EL RANGO
    }[];
    MATERIALS: {
        name: string; //NOMBRE UNICO DEL MATEIRIAL
        quantity: number; //CANTIDAD INSTALADA EN EL RANGO
        unit: string; //UNIDAD
    }[]; // Puedes ajustar el tipo si hay una estructura específica
    DATE_START: string;
    DATE_END: string;
    NOTES: Note[];

    // "NOT STARTED" | "NEED ATTENTION" | "OK" | "FINISHED"
    SITE_HEALTH: SITE_HEALTH; //COLORES EN ORDEN: GRAY|RED|LIGHT GREEN| GREEN
    
    // "NOT STARTED" | "IN PROGRESS" | "FINISHED" | "STOPPED"
    STATE: STATE; //COLORES EN ORDEN: GRAY|YELLOW|GREEN|RED

    START_PROJECT: string; //DATE STRING
    BUDGET: {
        //MATERIAL PRESUPUESTADO
        ESTIMATED: number; //PRESUPUESTO DEL PROYECTO
        ACTUAL: number; //INSTALADO GLOBAL DEL PROYECTO
        UNIT: string; //UNIDADES
        NAME: string; //NOMBRE UNICO DEL MATERIAL
    }[];
    REPORT_PHOTOS: string[]; // src de las fotos del reporte
}
