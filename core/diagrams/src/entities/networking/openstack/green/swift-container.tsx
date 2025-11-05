import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWIFT_CONTAINER = {
  _style: {
    entity:
      'fillColor=#008000;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.swift_container;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SwiftContainer(props: NodeProps) {
  return (
    <Shape
      {...SWIFT_CONTAINER}
      {...props}
      _style={extendStyle(SWIFT_CONTAINER, props)}
    />
  )
}
