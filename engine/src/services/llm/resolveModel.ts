import { ChatAnthropic } from '@langchain/anthropic'
import { ChatOpenAI } from '@langchain/openai'
import { ChatBedrockConverse } from '@langchain/aws'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'

const DEFAULT_ANTHROPIC_MODEL = 'claude-sonnet-4-6'
const DEFAULT_OPENAI_MODEL = 'gpt-5-mini'

export const resolveModelId = (): string | null => {
  const override = Deno.env.get('DINGHY_LLM_MODEL')
  if (override) return override
  const bedrockModel = Deno.env.get('DINGHY_LLM_BEDROCK_MODEL')
  if (bedrockModel) return `bedrock:${bedrockModel}`
  if (Deno.env.get('ANTHROPIC_API_KEY')) {
    const model = Deno.env.get('DINGHY_LLM_ANTHROPIC_MODEL') ||
      DEFAULT_ANTHROPIC_MODEL
    return `anthropic:${model}`
  }
  if (Deno.env.get('OPENAI_API_KEY')) {
    const model = Deno.env.get('DINGHY_LLM_OPENAI_MODEL') ||
      DEFAULT_OPENAI_MODEL
    return `openai:${model}`
  }
  return null
}

export const createChatModel = (modelId: string): BaseChatModel => {
  const colon = modelId.indexOf(':')
  const provider = colon >= 0 ? modelId.slice(0, colon) : ''
  const model = colon >= 0 ? modelId.slice(colon + 1) : modelId
  if (provider === 'anthropic') {
    return new ChatAnthropic({ model, temperature: 0 })
  }
  if (provider === 'openai') {
    return new ChatOpenAI({ model, temperature: 0 }) as any
  }
  if (provider === 'bedrock') {
    const region = Deno.env.get('AWS_REGION') ||
      Deno.env.get('AWS_DEFAULT_REGION')
    return new ChatBedrockConverse({ model, region, temperature: 0 })
  }
  throw new Error(
    `Unsupported provider in modelId: ${modelId}. Use anthropic:<model>, openai:<model>, or bedrock:<model>.`,
  )
}
