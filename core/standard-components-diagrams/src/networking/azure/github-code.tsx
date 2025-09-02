import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GITHUB_CODE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.github_code;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function GithubCode(props: DiagramNodeProps) {
  return (
    <Shape
      {...GITHUB_CODE}
      {...props}
      _style={extendStyle(GITHUB_CODE, props)}
    />
  )
}
