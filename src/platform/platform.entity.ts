import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ({ name: 'PlatformEntity'})
export class PlatformEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({nullable: false})
    name: string; 
    
    @Column({nullable: true})
    manufacture: string ;
}