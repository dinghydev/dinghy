import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QNA_MAKERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/QnA_Makers.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function QnaMakers(props: DiagramNodeProps) {
  return (
    <Shape {...QNA_MAKERS} {...props} _style={extendStyle(QNA_MAKERS, props)} />
  )
}
