import { Columns, Rows, Shape } from '@dinghy/base-components'

import { Activation, ActivationProps } from './activation.tsx'
import { Frame, FrameProps } from './frame.tsx'
import { Participant } from './participant.tsx'
import { Message, type MessageProps } from './message.tsx'
import {
  MessageType,
  type SequenceDiagramContext,
  SequenceDiagramProps,
  SequenceDiagramSchema,
} from './types.tsx'

function initializeContext(props: SequenceDiagramProps) {
  const context = SequenceDiagramSchema.parse(props) as SequenceDiagramContext
  if (context.messages) {
    context.interactions.unshift({
      messages: context.messages,
    })
  }
  if (context.interactions.length === 0) {
    throw new Error('Neither messages nor interactions are provided')
  }

  Object.entries(context.participants).map(([key, value]) => {
    if (!value.title) {
      context.participants[key].title = key
    }
  })

  context.activations = {}
  context.frames = []
  context.arrows = {}
  context.yActive = 0
  return context
}

function safeGetParticipant(context: SequenceDiagramContext, name: string) {
  let participant = context.participants[name]
  if (!participant) {
    participant = {
      title: name,
    }
    context.participants[name] = participant
  }
  return { participant, index: Object.keys(context.participants).indexOf(name) }
}

export function SequenceDiagram(props: SequenceDiagramProps) {
  const Root = props.title ? Shape : Columns
  const context = initializeContext(props)
  context.interactions.map((interaction, i) => {
    if (i > 0) {
      context.yActive += context.size.timelinePadding
    }
    const activations: Record<string, ActivationProps[]> = {}
    const arrows: MessageProps[] = []
    const frame = interaction.title
      ? {
        title: interaction.title,
        _x: 0 - context.size.timelinePadding * 2,
        _padding: context.size.timelinePadding,
      } as FrameProps
      : undefined
    if (frame) {
      context.yActive += context.size.timelinePadding
      frame._y = context.yActive
      context.yActive += context.size.timelinePadding * 3
      context.frames.push(frame)
    }
    const addMessage = (
      message: MessageType,
    ) => {
      const from = safeGetParticipant(context, message.from)
      const to = safeGetParticipant(context, message.to)
      const lastArrow = arrows.slice(-1)[0]
      const isSelf = to.index === from.index
      const isToRight = to.index > from.index
      const crossArrow = lastArrow && lastArrow.isToRight !== isToRight
      const xOffset = (isSelf || isToRight)
        ? context.size.activationWidth / 2
        : 0 - context.size.activationWidth / 2
      activations[message.from] ??= []
      activations[message.to] ??= []
      context.arrows[message.from] ??= []

      let activationFrom: ActivationProps = activations[message.from]
        ?.slice(-1)[0]

      let activationTo: ActivationProps = activations[message.to]
        ?.slice(-1)[0]
      if (message.return) {
        if (crossArrow) {
          Object.values(activations).map((as) => {
            as.map((a) => {
              if (!a.closed) {
                a._height += context.size.timelinePadding
              }
            })
          })
        }
        activationFrom.closed = true
        if (crossArrow) {
          context.yActive += context.size.timelinePadding
        }
        Object.values(activations).map((as) => {
          as.map((a) => {
            if (!a.closed) {
              a._height += context.size.timelinePadding
            }
          })
        })

        const inactiveArrow = {
          paddingX: context.size.timelinePadding,
          dashed: true,
          isToRight,
          source: {
            x: xOffset,
            y: context.yActive,
          },
          target: {
            x: (context.size.participantsPadding +
                  context.size.participant) *
                (to.index - from.index) - xOffset,
            y: context.yActive,
          },
          ...message,
        }
        context.yActive += context.size.timelinePadding
        context.arrows[message.from].push(inactiveArrow)
        arrows.push(inactiveArrow)
        return
      } // message.return===true

      if (!isSelf) {
        if (crossArrow) {
          context.yActive += context.size.timelinePadding
        }
        Object.values(activations).map((as) => {
          as.map((a) => {
            if (!a.closed) {
              a._height += context.size.timelinePadding
              if (crossArrow) {
                a._height += context.size.timelinePadding
              }
            }
          })
        })
      }

      if (!activationFrom || activationFrom.closed) {
        activationFrom = {
          _x: 0 - context.size.activationWidth / 2,
          _y: context.yActive,
          _width: context.size.activationWidth,
          _height: context.size.timelinePadding * 2,
        } as ActivationProps
        activations[message.from].push(activationFrom)
        context.yActive += context.size.timelinePadding
        if (isSelf) {
          Object.values(activations).map((as) => {
            as.map((a) => {
              if (!a.closed) {
                a._height += context.size.timelinePadding * 2
              }
            })
          })
        }
      } else if (isSelf) {
        context.yActive += context.size.timelinePadding
        Object.values(activations).map((as) => {
          as.map((a) => {
            if (!a.closed) {
              a._height += context.size.timelinePadding * 4
            }
          })
        })
      }

      if (!isSelf) {
        if (!activationTo || activationTo.closed) {
          activationTo = {
            _x: 0 - context.size.activationWidth / 2,
            _y: context.yActive,
            _width: context.size.activationWidth,
            _height: context.size.timelinePadding,
          } as ActivationProps
          activations[message.to].push(activationTo)
        }
      }

      const activeArrow = {
        paddingX: context.size.timelinePadding,
        source: {
          x: xOffset,
          y: context.yActive,
        },
        target: {
          x: (context.size.participantsPadding +
                context.size.participant) *
              (to.index - from.index) +
            (isSelf ? xOffset : 0 - xOffset),
          y: context.yActive +
            (isSelf ? context.size.timelinePadding * 2 : 0),
        },
        isToRight,
        ...message,
      }
      context.arrows[message.from].push(activeArrow)
      arrows.push(activeArrow)

      context.yActive += context.size.timelinePadding
      if (isSelf) {
        context.yActive += context.size.timelinePadding * 2
      }
    } // addMessage

    for (let i = 0; i < interaction.messages.length; i++) {
      const message = interaction.messages[i]
      addMessage(message)
    }

    for (const [participant, as] of Object.entries(activations)) {
      context.activations[participant] ??= []
      context.activations[participant].push(...as)
    }
    context.yActive = Math.max(
      0,
      ...Object.values(activations).map(
        (as) => {
          const lastActivation = as.slice(-1)[0]
          return lastActivation ? lastActivation._y + lastActivation._height : 0
        },
      ),
    )

    if (frame) {
      frame._height = context.yActive - frame._y +
        context.size.timelinePadding
      context.yActive += context.size.timelinePadding
    }
  }) // interactions loop

  context.frames.map((frame) => {
    frame._width =
      (context.size.participantsPadding + context.size.participant) *
        (Object.keys(context.participants).length - 1) +
      context.size.timelinePadding * 4
  })
  const lifelineHeight = Math.max(
    0,
    ...Object.values(context.activations).map(
      (as) => {
        const lastActivation = as.slice(-1)[0]
        return lastActivation._y + lastActivation._height
      },
    ),
  ) + context.size.timelinePadding * 2
  return (
    <Root {...props}>
      {Object.entries(context.participants).map(([title, participant], i) => (
        <Rows key={i}>
          <Participant
            _width={context.size.participant}
            _height={context.size.participant}
            lifelineHeight={lifelineHeight}
            paddingY={context.size.timelinePadding}
            paddingX={context.size.participantsPadding}
            {...participant}
          >
            {context.activations[title]?.map((activation, i) => (
              <Activation key={i} {...activation} />
            ))}
            {context.arrows[title]?.map((arrow, i) => (
              <Message key={i} {...arrow} />
            ))}
            {i === 0 &&
              context.frames.map((frame, i) => <Frame key={i} {...frame} />)}
          </Participant>
        </Rows>
      ))}
    </Root>
  )
}
