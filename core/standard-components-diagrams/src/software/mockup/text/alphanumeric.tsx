import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALPHANUMERIC = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.alphanumeric;linkText=;html=1;fontStyle=4;fontSize=17;fontColor=#0000ff;',
  },
  _original_width: 450,
  _original_height: 50,
}

export function Alphanumeric(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALPHANUMERIC}
      {...props}
      _style={extendStyle(ALPHANUMERIC, props)}
    />
  )
}
