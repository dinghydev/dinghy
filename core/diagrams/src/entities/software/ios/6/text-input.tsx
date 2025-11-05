import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEXT_INPUT = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iTextInput;strokeColor=#444444;buttonText=;fontSize=8;whiteSpace=wrap;align=left;',
  },
  _width: 43.5,
  _height: 15,
}

export function TextInput(props: NodeProps) {
  return (
    <Shape {...TEXT_INPUT} {...props} _style={extendStyle(TEXT_INPUT, props)} />
  )
}
