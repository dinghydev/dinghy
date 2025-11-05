import z from 'zod'
import { NodeProps } from '@dinghy/base-components'
import { ActivationProps } from './activation.tsx'
import { MessageProps } from './message.tsx'
import { FrameProps } from './frame.tsx'
import { defaultDiagramOptions } from '@dinghy/renderer-drawio'

/**
# Sequence diagram

A simple implementation of standard UML sequence diagram. See examples [here](/examples/diagrams/composites/sequence-diagram)

## ParticipantSchema

A participant in the sequence diagram

 */
export const ParticipantSchema = z.object({
  title: z.string().optional().describe('Name of the participant').meta({
    defaultText: 'Inferred from participant shape if not provided',
  }),
  icon: z.any().optional().describe(
    `Shape of the participant`,
  ).meta({ type: 'Component' }),
  lifelineHeight: z.number().optional().describe(
    'Height of the lifeline, calculated automatically',
  ).meta({ hidden: true }),
})

/**
## MessageSchema
A message between participants
*/
export const MessageSchema = z.object({
  from: z.string().describe('Sender participant'),
  to: z.string().describe('Receiver participant'),
  message: z.string().optional().describe('Message content'),
  return: z.boolean().default(false).describe('Is this a return message?'),
  dashed: z.boolean().describe(
    'Is this message dashed? Default to true for return messages',
  ).optional(),
}).describe('A message between participants')

export type MessageType = z.output<typeof MessageSchema>

/**
## InteractionSchema
An interaction frame in the sequence diagram
*/
export const InteractionSchema = z.object({
  title: z.string().optional().describe(
    'Title of the interaction frame, if not provided, no frame is drawn',
  ),
  messages: MessageSchema.array().describe('Messages in this interaction'),
})

const sizeDefault = {
  participant: defaultDiagramOptions.dimension.boxWidth,
  timelinePadding: 15,
  participantsPadding: 100,
  activationWidth: 12,
}

/**
## SizeSchema
Size configuration for the sequence diagram
*/
export const SizeSchema = z.object({
  participant: z.number().default(sizeDefault.participant).describe(
    'Width of the participant box',
  ),
  timelinePadding: z.number().default(sizeDefault.timelinePadding).describe(
    'Space between each messages',
  ),
  participantsPadding: z.number().default(
    sizeDefault.participantsPadding,
  ).describe('Padding between participant boxes'),
  activationWidth: z.number().default(sizeDefault.activationWidth).describe(
    'Width of the activation bar',
  ),
})

/**
## SequenceDiagramSchema

The schema for end user to define sequence diagram component
 */
export const SequenceDiagramSchema = z.object({
  participants: z.record(z.string(), ParticipantSchema).default({}).describe(
    'Participants in the sequence diagram, if not provided, participants will be inferred from message sources and targets',
  ),
  messages: MessageSchema.array().optional().describe(
    'If provided, messages converted as first interaction automatically',
  ),
  interactions: InteractionSchema.array().default([]).describe(
    'Interactions in the sequence diagram',
  ),
  size: SizeSchema.default(sizeDefault).describe(
    'Size configuration for the diagram',
  ),
}).meta({
  hideDefault: true,
})

export type SequenceDiagramProps =
  & z.output<typeof SequenceDiagramSchema>
  & NodeProps

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
