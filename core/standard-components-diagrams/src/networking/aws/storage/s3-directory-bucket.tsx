import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const S3_DIRECTORY_BUCKET = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.simple_storage_service_directory_bucket;',
  },
  _width: 75,
  _height: 78,
}

export function S3DirectoryBucket(props: DiagramNodeProps) {
  return (
    <Shape
      {...S3_DIRECTORY_BUCKET}
      {...props}
      _style={extendStyle(S3_DIRECTORY_BUCKET, props)}
    />
  )
}
