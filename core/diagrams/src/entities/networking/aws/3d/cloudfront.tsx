import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUDFRONT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.cloudfront;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 103.8,
  _height: 169.79999999999998,
}

export function Cloudfront(props: NodeProps) {
  return (
    <Shape {...CLOUDFRONT} {...props} _style={extendStyle(CLOUDFRONT, props)} />
  )
}
