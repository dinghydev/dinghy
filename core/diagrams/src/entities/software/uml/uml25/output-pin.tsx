import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OUTPUT_PIN = {
  _style: {
    entity:
      'shape=mxgraph.uml25.inputPin;html=1;points=[[0,0.5],[1,0.5]];flipH=1;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function OutputPin(props: NodeProps) {
  return (
    <Shape {...OUTPUT_PIN} {...props} _style={extendStyle(OUTPUT_PIN, props)} />
  )
}
