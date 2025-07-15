import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MARKETPLACE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Marketplace.svg;',
  _width: 56.00000000000001,
  _height: 64,
}

export function Marketplace(props: DiagramNodeProps) {
  return <Shape {...MARKETPLACE} {...props} />
}
