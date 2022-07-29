import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ShoesStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum BrandName {
  NIKE = 'NIKE',
  ADIDAS = 'ADIDAS',
  PUMA = 'PUMA',
  JORDAN = 'JORDAN',
}

@Entity('shoes')
export class Shoes {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ name: 'code', type: 'varchar', length: 30, nullable: false })
  code: string;

  @Column({ name: 'image_url', type: 'varchar', nullable: false })
  imageUrl: string;

  @Column({
    name: 'brand',
    type: 'enum',
    enum: BrandName,
    nullable: false,
    default: BrandName.NIKE,
  })
  brand: BrandName;

  @Column({ name: 'size', type: 'decimal', nullable: false })
  size: number;

  @Column({ name: 'price', type: 'integer', nullable: false })
  price: number;

  @Column({ name: 'total', type: 'integer', nullable: false, default: 0 })
  total: number;

  @Column({
    name: 'status',
    type: 'enum',
    enum: ShoesStatus,
    nullable: false,
    default: ShoesStatus.INACTIVE,
  })
  status: ShoesStatus;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
