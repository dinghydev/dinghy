import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REGION = {
  _style: {
    container:
      'sketch=0;outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_region;strokeColor=#B6BABF;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#B6BABF;dashed=1;',
    entity: {
      strokeColor: '#B6BABF',
      fontColor: '#B6BABF',
    },
  },
}

export function Region(props: NodeProps) {
  return <Shape {...REGION} {...props} _style={extendStyle(REGION, props)} />
}
