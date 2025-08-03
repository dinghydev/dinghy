import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVOPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Azure_DevOps.svg;strokeColor=none;',
  _width: 64,
  _height: 64,
}

export function Devops(props: DiagramNodeProps) {
  return <Shape {...DEVOPS} {...props} />
}
