import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'numeric', default: 0 })
  usdt: number;

  @Column({ type: 'numeric' })
  total_usdt_transfer: number;

  @Column({ default: 0, type: 'numeric' })
  usdt_receive: number;

  @Column({ default: 0, type: 'numeric' })
  usdt_block: number;

  @Column({ type: 'float4', default: 0 })
  total_usdt_transfer2: number;

  /*




  @Column({ type: 'numeric', default: 0 })
  usdt: number;
 
  === 
 
  @Column({ type: 'float4' })
  total_usdt_transfer: number;

  @Column({ default: 0, type: 'float4' })
  usdt_receive: number;

  @Column({ default: 0, type: 'float4' })
  usdt_block: number;
*/
}
