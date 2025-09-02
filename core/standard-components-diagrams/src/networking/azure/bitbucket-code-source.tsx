import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BITBUCKET_CODE_SOURCE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.bitbucket_code_source;',
  },
  _original_width: 42.5,
  _original_height: 50,
}

export function BitbucketCodeSource(props: DiagramNodeProps) {
  return (
    <Shape
      {...BITBUCKET_CODE_SOURCE}
      {...props}
      _style={extendStyle(BITBUCKET_CODE_SOURCE, props)}
    />
  )
}
