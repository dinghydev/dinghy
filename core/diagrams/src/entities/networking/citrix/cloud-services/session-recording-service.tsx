import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SESSION_RECORDING_SERVICE = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.session_recording_service;',
  },
  _width: 50,
  _height: 34.765,
}

export function SessionRecordingService(props: NodeProps) {
  return (
    <Shape
      {...SESSION_RECORDING_SERVICE}
      {...props}
      _style={extendStyle(SESSION_RECORDING_SERVICE, props)}
    />
  )
}
