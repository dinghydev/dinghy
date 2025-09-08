import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHEVRON_LIST_12 = {
  _style: {
    entity:
      'shape=rect;fillColor=#B0E3E6;strokeColor=none;fontSize=12;html=1;whiteSpace=wrap;align=left;verticalAlign=top;spacing=5;rounded=0;',
  },
  _original_width: 17,
  _original_height: 420,
}

export function ChevronList12(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHEVRON_LIST_12}
      {...props}
      _style={extendStyle(CHEVRON_LIST_12, props)}
    />
  )
}
