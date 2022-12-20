import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 50 })
    first_name: string;
    
    @Column({ type: 'varchar', length: 50 })
    last_name: string;
    
    @Column({ type: 'varchar', length: 10 })
    phone: string;
    
    @Column({ type: 'varchar', length: 50 })
    username: string;
    
    @Column({ type: 'varchar', length: 150 })
    password: string;
    
    @Column({ type: 'tinyint', default: 0 })
    user_type?: number;
    
    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;
    
    @Column({ type: 'timestamp', default: null })
    updated_at?: Date;
}
