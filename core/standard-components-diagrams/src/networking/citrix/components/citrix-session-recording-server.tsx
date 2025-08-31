import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CITRIX_SESSION_RECORDING_SERVER = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_session_recording_server;',
  },
  _width: 50,
  _height: 33.19,
}

export function CitrixSessionRecordingServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CITRIX_SESSION_RECORDING_SERVER}
      {...props}
      _style={extendStyle(CITRIX_SESSION_RECORDING_SERVER, props)}
    />
  )
}
