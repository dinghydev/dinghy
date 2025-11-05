import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UDF_FUNCTION = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.enterprise.udf_function;fillColor=#0078D7;',
  },
  _original_width: 47,
  _original_height: 50,
}

export function UdfFunction(props: NodeProps) {
  return (
    <Shape
      {...UDF_FUNCTION}
      {...props}
      _style={extendStyle(UDF_FUNCTION, props)}
    />
  )
}
