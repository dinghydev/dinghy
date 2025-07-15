import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COPYRIGHT = {
  _style:
    'strokeColor=#999999;verticalLabelPosition=bottom;shadow=0;dashed=0;verticalAlign=top;strokeWidth=2;html=1;shape=mxgraph.mockup.misc.copyrightIcon;',
  _width: 25,
  _height: 25,
}

export function Copyright(props: DiagramNodeProps) {
  return <Shape {...COPYRIGHT} {...props} />
}
