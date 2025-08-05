import z from 'zod'
import { DiagramNodeProps } from '@reactiac/base-components'
import { ActivationProps } from './activation.tsx'
import { MessageProps } from './message.tsx'
import { FrameProps } from './frame.tsx'

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
})

export type MessageType = z.output<typeof MessageSchema>

export const InteractionSchema = z.object({
  title: z.string().optional(),
  messages: MessageSchema.array(),
})

export const SizeSchema = z.object({
  participant: z.number().default(60),
  paddingTimeline: z.number().default(16),
  paddingBetweenMessages: z.number().default(50),
  paddingBetweenParticipants: z.number().default(50),
  paddingActivation: z.number().default(10),
  activation: z.number().default(12),
  activationWidth: z.number().default(12),
  activationHeight: z.number().default(30),
})

export const SequenceDiagramSchema = z.object({
  participants: z.record(z.string(), ParticipantSchema).default({}),
  messages: MessageSchema.array().optional(),
  interactions: InteractionSchema.array().default([]),
  size: SizeSchema.default({
    participant: 60,
    paddingTimeline: 15,
    paddingBetweenMessages: 15,
    paddingBetweenParticipants: 150,
    activationWidth: 12,
    activationHeight: 30,
    paddingActivation: 6,
  }),
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
