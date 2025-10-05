import z from 'zod'
import { DiagramNodeProps } from '@dinghy/base-components'
import { ActivationProps } from './activation.tsx'
import { MessageProps } from './message.tsx'
import { FrameProps } from './frame.tsx'
import { defaultDiagramOptions } from '@dinghy/renderer-drawio'

export const ParticipantSchema = z.object({
  title: z.string().optional(),
  icon: z.any().optional(),
  lifelineHeight: z.number().optional(),
})

export const MessageSchema = z.object({
  from: z.string(),
  to: z.string(),
  message: z.string().optional(),
  return: z.boolean().optional(),
  dashed: z.boolean().optional(),
})

export type MessageType = z.output<typeof MessageSchema>

export const InteractionSchema = z.object({
  title: z.string().optional(),
  messages: MessageSchema.array(),
})

const sizeDefault = {
  participant: defaultDiagramOptions.dimension.boxWidth,
  timelinePadding: 15,
  participantsPadding: 100,
  activationWidth: 12,
}

export const SizeSchema = z.object({
  participant: z.number().default(sizeDefault.participant),
  timelinePadding: z.number().default(sizeDefault.timelinePadding),
  participantsPadding: z.number().default(
    sizeDefault.participantsPadding,
  ),
  activationWidth: z.number().default(sizeDefault.activationWidth),
})

export const SequenceDiagramSchema = z.object({
  participants: z.record(z.string(), ParticipantSchema).default({}),
  messages: MessageSchema.array().optional(),
  interactions: InteractionSchema.array().default([]),
  size: SizeSchema.default(sizeDefault),
})

export type SequenceDiagramProps =
  & z.output<typeof SequenceDiagramSchema>
  & DiagramNodeProps

export type SequenceDiagramContext = {
  messages: z.output<typeof MessageSchema>[]
  interactions: z.output<typeof InteractionSchema>[]
  participants: Record<string, z.output<typeof ParticipantSchema>>
  size: z.output<typeof SizeSchema>

  activations: Record<string, ActivationProps[]>
  arrows: Record<string, MessageProps[]>
  frames: FrameProps[]
  yActive: number
}
