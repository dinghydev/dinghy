import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOBILE_WORKER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.mobile_worker;aspect=fixed;strokeColor=none;fillColor=#777777;',
  },
  _width: 36,
  _height: 90,
}

export function MobileWorker(props: NodeProps) {
  return (
    <Shape
      {...MOBILE_WORKER}
      {...props}
      _style={extendStyle(MOBILE_WORKER, props)}
    />
  )
}
