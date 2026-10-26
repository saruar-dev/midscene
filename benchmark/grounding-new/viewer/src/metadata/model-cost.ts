/**
 * Reference snapshots, keyed by exact evaluation request model ID.
 * Prefer OpenRouter for both pricing and performance. Use official sources
 * only for metrics unavailable on OpenRouter, with their source and conditions
 * recorded explicitly. Do not substitute a different model to fill a gap.
 * Ark release IDs map to the corresponding OpenRouter model pages; provider
 * release suffixes do not establish identical serving snapshots across hosts.
 * OpenRouter prices use the page header's IN / OUT PRICE, converted from USD per million
 * to USD per token. This is a common comparison baseline: no cache discounts,
 * context-length tiers, or provider-specific adjustments are applied.
 *
 * OpenRouter performance uses the two separate P50 best cards: maximum output throughput
 * and minimum latency (TTFT). These may come from different providers/tiers;
 * together with the headline prices, they do not describe one purchasable plan.
 * The cards do not state their sampling window; observedAt is retrieval time.
 * Doubao Seed Evolving is unavailable on OpenRouter; it uses Ark's standard CNY
 * prices and official leaderboard means. Its throughput is the reciprocal of
 * mean TPOT, not a P50 or mean throughput. The input length, time window and currency conversion are
 * recorded below; this exception is not directly comparable to best P50.
 *
 * Estimate input and output cost separately per testcase, then add them before
 * averaging total cost. Geometric means of the two parts must not be added.
 * Estimate serial-call latency using calls * TTFT + subsequent output / TPS.
 * Input tokens are not output tokens and must not be divided by output TPS.
 * Completion totals do not separate reasoning, which may overlap TTFT.
 * These are reference estimates, not measured means, P50 latency, or invoices.
 */
export const modelCosts = {
  'gpt-6-sol': {
    source: 'OpenRouter',
    url: 'https://openrouter.ai/openai/gpt-6-sol',
    observedAt: '2026-10-23T01:47:14Z',
    pricing: {
      basis: 'model-page-header',
      currency: 'USD',
      inputPerToken: 2 / 1_000_000,
      outputPerToken: 10 / 1_000_000,
    },
    performance: {
      basis: 'best-per-metric',
      percentile: 'p50',
      timeToFirstTokenMs: 1_670,
      outputTokensPerSecond: 103,
    },
  },
  'qwen3.8-flash': {
    source: 'OpenRouter',
    url: 'https://openrouter.ai/qwen/qwen3.8-flash',
    observedAt: '2026-10-23T01:47:04Z',
    pricing: {
      basis: 'model-page-header',
      currency: 'USD',
      inputPerToken: 0.15 / 1_000_000,
      outputPerToken: 0.47 / 1_000_000,
    },
    performance: {
      basis: 'best-per-metric',
      percentile: 'p50',
      timeToFirstTokenMs: 1_660,
      outputTokensPerSecond: 52,
    },
  },
  'deepseek-v4.1-flash': {
    source: 'OpenRouter',
    url: 'https://openrouter.ai/deepseek/deepseek-v4.1-flash',
    observedAt: '2026-10-26T03:11:24Z',
    pricing: {
      basis: 'model-page-header',
      currency: 'USD',
      inputPerToken: 0.02 / 1_000_000,
      outputPerToken: 1 / 1_000_000,
    },
    performance: {
      basis: 'best-per-metric',
      percentile: 'p50',
      timeToFirstTokenMs: 190,
      outputTokensPerSecond: 273,
    },
  },
  'gemini-4-argon': {
    source: 'OpenRouter',
    url: 'https://openrouter.ai/google/gemini-4-argon',
    observedAt: '2026-10-26T03:11:24Z',
    pricing: {
      basis: 'model-page-header',
      currency: 'USD',
      inputPerToken: 2 / 1_000_000,
      outputPerToken: 10 / 1_000_000,
    },
    performance: {
      basis: 'best-per-metric',
      percentile: 'p50',
      timeToFirstTokenMs: 3_310,
      outputTokensPerSecond: 59,
    },
  },
  'glm-4.5v': {
    source: 'OpenRouter',
    url: 'https://openrouter.ai/z-ai/glm-4.5v',
    observedAt: '2026-10-26T03:11:24Z',
    pricing: {
      basis: 'model-page-header',
      currency: 'USD',
      inputPerToken: 0.6 / 1_000_000,
      outputPerToken: 1.8 / 1_000_000,
    },
    performance: {
      basis: 'best-per-metric',
      percentile: 'p50',
      timeToFirstTokenMs: 2_090,
      outputTokensPerSecond: 48,
    },
  },
  'kimi-k2.5': {
    source: 'OpenRouter',
    url: 'https://openrouter.ai/moonshotai/kimi-k2.5',
    observedAt: '2026-10-26T03:11:24Z',
    pricing: {
      basis: 'model-page-header',
      currency: 'USD',
      inputPerToken: 0.49 / 1_000_000,
      outputPerToken: 2.5 / 1_000_000,
    },
    performance: {
      basis: 'best-per-metric',
      percentile: 'p50',
      timeToFirstTokenMs: 550,
      outputTokensPerSecond: 82,
    },
  },
  'deepseek-v4-1-flash-261017': {
    source: 'OpenRouter',
    url: 'https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017',
    observedAt: '2026-10-26T03:36:32Z',
    pricing: {
      basis: 'model-page-header',
      currency: 'USD',
      inputPerToken: 0.02 / 1_000_000,
      outputPerToken: 1 / 1_000_000,
    },
    performance: {
      basis: 'best-per-metric',
      percentile: 'p50',
      timeToFirstTokenMs: 250,
      outputTokensPerSecond: 234,
    },
  },
  'glm-5-3-flash-260828': {
    source: 'OpenRouter',
    url: 'https://openrouter.ai/z-ai/glm-5.3-flash',
    observedAt: '2026-10-26T03:36:32Z',
    pricing: {
      basis: 'model-page-header',
      currency: 'USD',
      inputPerToken: 0.0413 / 1_000_000,
      outputPerToken: 0.0758 / 1_000_000,
    },
    performance: {
      basis: 'best-per-metric',
      percentile: 'p50',
      timeToFirstTokenMs: 280,
      outputTokensPerSecond: 165,
    },
  },
  'kimi-k3-1-pro-261024': {
    source: 'OpenRouter',
    url: 'https://openrouter.ai/moonshotai/kimi-k3.1-pro',
    observedAt: '2026-10-26T03:37:19Z',
    pricing: {
      basis: 'model-page-header',
      currency: 'USD',
      inputPerToken: 2 / 1_000_000,
      outputPerToken: 10 / 1_000_000,
    },
    performance: {
      basis: 'best-per-metric',
      percentile: 'p50',
      timeToFirstTokenMs: 4_960,
      outputTokensPerSecond: 38,
    },
  },
  'doubao-seed-evolving': {
    source: 'Volcengine Ark',
    url: 'https://console.volcengine.com/ark/region:cn-beijing/docs/model-pricing',
    observedAt: '2026-10-26T03:42:49Z',
    pricing: {
      basis: 'standard-online-inference',
      currency: 'CNY',
      // Public non-audio rates, without account or cache discounts.
      inputPerToken: 6 / 1_000_000,
      outputPerToken: 30 / 1_000_000,
      usdExchangeRate: {
        source: 'Bank of China reference rate',
        url: 'https://www.boc.cn/sourcedb/whpj/',
        quotedAt: '2026-10-26T11:13:43+08:00',
        // The source quotes CNY 671.62 per USD 100.
        cnyPerUsd: 6.7162,
      },
    },
    performance: {
      basis: 'window-mean',
      url: 'https://ark.volcengine.com/region:cn-beijing/model/leaderboard',
      observedAt: '2026-10-26T03:41:21Z',
      conditions:
        '10k input tokens, trailing 6 hours, thinking disabled, no cache hits',
      timeToFirstTokenMs: 2_352,
      // Ark reports mean TPOT of 23.1 ms per subsequent output token.
      outputTokensPerSecond: 1000 / 23.1,
    },
  },
} as const;
