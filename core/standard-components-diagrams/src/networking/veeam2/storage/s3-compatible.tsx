import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const S3_COMPATIBLE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.s3_compatible;',
  },
  _width: 28.000000000000004,
  _height: 28.000000000000004,
}

export function S3Compatible(props: DiagramNodeProps) {
  return (
    <Shape
      {...S3_COMPATIBLE}
      {...props}
      _style={extendStyle(S3_COMPATIBLE, props)}
    />
  )
}
