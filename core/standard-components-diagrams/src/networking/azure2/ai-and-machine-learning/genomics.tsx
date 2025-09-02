import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENOMICS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Genomics.svg;strokeColor=none;',
  },
  _original_width: 36,
  _original_height: 68,
}

export function Genomics(props: DiagramNodeProps) {
  return (
    <Shape {...GENOMICS} {...props} _style={extendStyle(GENOMICS, props)} />
  )
}
