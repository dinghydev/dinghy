import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UNITY_SERVER = {
  _style:
    'shape=mxgraph.cisco.servers.unity_server;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 50,
  _height: 69,
}

export function UnityServer(props: DiagramNodeProps) {
  return <Shape {...UNITY_SERVER} {...props} />
}
