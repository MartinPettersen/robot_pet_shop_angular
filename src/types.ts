
export type RobotPet = {
    bilde: string,
    tittel: string,
    beskrivelse: String,
    pris: string,
    General: string,
    Kategori: string,
    Størrelse: string,
    Vekt: number,
    Materiale: string,
    Batteri: string,
    Lading: number
    Garanti: string,
    Funksjoner: string,
    Aldersanbefaling: number,
    Spesifikasjoner: string,
}

export interface ProductCategory {
    Mammalian: RobotPet[];
    Avian: RobotPet[];
    'Arachnid & Other Invertebrates': RobotPet[];
    Primates: RobotPet[];
    Dinosaurs: RobotPet[];
    'Robotic Wonders': RobotPet[];
}
