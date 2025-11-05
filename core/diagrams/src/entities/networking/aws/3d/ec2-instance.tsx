import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EC2_INSTANCE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.application_server;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 123,
  _height: 124,
}

export function Ec2Instance(props: NodeProps) {
  return (
    <Shape
      {...EC2_INSTANCE}
      {...props}
      _style={extendStyle(EC2_INSTANCE, props)}
    />
  )
}
