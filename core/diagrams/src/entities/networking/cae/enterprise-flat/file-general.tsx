import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FILE_GENERAL = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.file',
  },
  _original_width: 47,
  _original_height: 50,
}

export function FileGeneral(props: NodeProps) {
  return (
    <Shape
      {...FILE_GENERAL}
      {...props}
      _style={extendStyle(FILE_GENERAL, props)}
    />
  )
}
