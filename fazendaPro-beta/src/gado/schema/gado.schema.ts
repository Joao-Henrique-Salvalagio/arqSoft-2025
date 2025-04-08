import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Gado extends Document {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  raca: string;

  @Prop({ required: true })
  idade: number;
}

export const GadoSchema = SchemaFactory.createForClass(Gado);
