import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const THREAT_ACTOR_TABLE = {
  _style: {
    container:
      'shape=table;startSize=30;container=1;collapsible=0;childLayout=tableLayout;fillColor=#F8CECC;strokeColor=#B85450;fontStyle=1;shadow=1;swimlaneFillColor=#FFFFFF;fontColor=#000000;whiteSpace=wrap;html=1;',
    entity: {
      strokeColor: '#B85450',
      fillColor: '#F8CECC',
      fontColor: '#000000',
    },
  },
}

export function ThreatActorTable(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, THREAT_ACTOR_TABLE)} />
}
