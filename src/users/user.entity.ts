import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  currentlyListening: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;
}
