import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const S3_OBJECT_LOCK = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.s3_object_lock;',
  },
  _width: 71,
  _height: 78,
}

export function S3ObjectLock(props: DiagramNodeProps) {
  return (
    <Shape
      {...S3_OBJECT_LOCK}
      {...props}
      _style={extendStyle(S3_OBJECT_LOCK, props)}
    />
  )
}
