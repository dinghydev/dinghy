import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORXWEB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.worxweb;fillColor=#2A3437;gradientColor=#B8B9B9;gradientDirection=south;',
  },
  _original_width: 38,
  _original_height: 38,
}

export function Worxweb(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WORXWEB)} />
}
