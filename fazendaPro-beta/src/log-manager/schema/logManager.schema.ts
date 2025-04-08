import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class LogManager extends Document {
  @Prop({ required: true })
  dados: string[];

  @Prop({ required: true })
  data_alteracao: Date;
}

export const GadoSchema = SchemaFactory.createForClass(LogManager);
