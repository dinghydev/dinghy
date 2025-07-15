import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BONSAI = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Bonsai.svg;',
  _width: 68,
  _height: 66,
}

export function Bonsai(props: DiagramNodeProps) {
  return <Shape {...BONSAI} {...props} />
}
