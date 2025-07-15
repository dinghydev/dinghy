import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALPHANUMERIC = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.alphanumeric;linkText=;html=1;fontStyle=4;fontSize=17;fontColor=#0000ff;',
  _width: 450,
  _height: 50,
}

export function Alphanumeric(props: DiagramNodeProps) {
  return <Shape {...ALPHANUMERIC} {...props} />
}
