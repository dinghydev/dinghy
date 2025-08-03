import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENOMICS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Genomics.svg;strokeColor=none;',
  _width: 36,
  _height: 68,
}

export function Genomics(props: DiagramNodeProps) {
  return <Shape {...GENOMICS} {...props} />
}
