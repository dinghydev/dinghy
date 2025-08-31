import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_ENCRYPTED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.tape_encrypted;',
  },
  _width: 46,
  _height: 30,
}

export function TapeEncrypted(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_ENCRYPTED}
      {...props}
      _style={extendStyle(TAPE_ENCRYPTED, props)}
    />
  )
}
