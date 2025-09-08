import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PERCENTAGE_LIST_2 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#B1DDF0;strokeColor=none;',
  },
  _original_width: 1,
  _original_height: 190,
}

export function PercentageList2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_2}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_2, props)}
    />
  )
}
