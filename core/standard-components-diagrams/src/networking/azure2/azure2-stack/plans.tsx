import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PLANS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Plans.svg;strokeColor=none;',
  _width: 52,
  _height: 64,
}

export function Plans(props: DiagramNodeProps) {
  return <Shape {...PLANS} {...props} />
}
